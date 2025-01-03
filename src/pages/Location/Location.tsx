import * as S from "./style";
import * as C from "../../allFiles";
import local from "../../assets/icon-local.png";
import { useEffect, useState } from "react";
import axios from "axios";

type Location = {
  latitude: number | null;
  longitude: number | null;
};

const Location = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [address, setAddress] = useState<string | null>(
    "위치를 가져오는 중..."
  );
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({ latitude: lat, longitude: lon });
          toAddress(lon, lat);
          fetchRestaurants(lon, lat);
        },
        (error) => {
          setError("위치를 가져오는 데 실패했습니다.");
          console.error(error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    }
  }, []);

  const toAddress = (lon: number, lat: number) => {
    const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
    if (!kakaoApiKey) {
      setError("카카오 API 키가 없습니다.");
      return;
    }

    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoApiKey}`,
          },
        }
      )
      .then((response) => {
        const totalCount = response.data.meta.total_count;
        if (totalCount > 0) {
          const document = response.data.documents[0];
          const region1 = document.address.region_1depth_name;
          const region2 = document.address.region_2depth_name;
          const region3 = document.address.region_3depth_name.substr(0, 4);
          const fullAddress = `${region1} ${region2} ${region3}`;
          setAddress(fullAddress);
        }
      })
      .catch((error) => {
        setError("주소를 가져오는 데 실패했습니다.");
        console.error(error);
      });
  };

  const fetchRestaurants = (lon: number, lat: number) => {
    const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
    if (!kakaoApiKey) {
      setError("카카오 API 키가 없습니다.");
      return;
    }

    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=식당&x=${lon}&y=${lat}&radius=20000`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoApiKey}`,
          },
        }
      )
      .then((response) => {
        const places = response.data.documents;
        if (places.length > 0) {
          setRestaurants(places);
        } else {
          setRestaurants([]);
        }
      })
      .catch((error) => {
        setError("식당 정보를 불러오는 데 실패했습니다.");
        console.error(error);
      });
  };

  const handleSearchCurrentLocation = () => {
    const lat = 36.303172;
    const lon = 128.5851977;
    setLocation({ latitude: lat, longitude: lon });
    toAddress(lon, lat);
    fetchRestaurants(lon, lat);
  };

  const handleSelectLocation = (location: string) => {
    setAddress(location);
  };

  return (
    <S.OuterBox>
      <C.Header />
      <S.BackgroundCont />
      <S.FirstSection>
        <div>당신을 위한</div>
        <div>
          <strong>{address || "위치 불러오는 중..."}</strong> 추천 맛집
        </div>
        <S.BtnCont>
          <S.LocationBtn onClick={() => setIsModalOpen(true)}>
            다른 지역 선택
          </S.LocationBtn>
          <S.LocalBtn onClick={handleSearchCurrentLocation}>
            <img src={local} alt="현 위치 검색" />현 위치 검색
          </S.LocalBtn>
        </S.BtnCont>
      </S.FirstSection>

      <S.RestaurantList>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <S.RestaurantItem key={index}>
              <h3>{restaurant.place_name}</h3>
              <div>{restaurant.address_name}</div>
            </S.RestaurantItem>
          ))
        ) : (
          <div></div>
        )}
      </S.RestaurantList>

      <C.LocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLocationSelect={handleSelectLocation}
      />
    </S.OuterBox>
  );
};

export default Location;
