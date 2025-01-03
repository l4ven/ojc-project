import React, { useState, useEffect } from "react";
import * as S from "./style";
import xmark from "../../assets/xmark-solid.svg";
import axios from "axios";

type LocationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (address: string, lat: number, lon: number) => void; // 좌표값을 전달
};

const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onLocationSelect,
}) => {
  const [locations, setLocations] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<string>("선택하세요");
  const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
  const [selectedDong, setSelectedDong] = useState<any>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("/locations.json");
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("위치 데이터를 불러오는 데 실패했습니다.", error);
      }
    };
    fetchLocations();
  }, []);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setSelectedDistrict(null);
    setSelectedDong(null);
  };

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
    setSelectedDong(null);
  };

  const getCoordinates = async (address: string) => {
    const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

    if (!kakaoApiKey) {
      console.error("카카오 API 키가 없습니다.");
      return null;
    }

    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoApiKey}`,
          },
        }
      );

      if (response.data.documents.length > 0) {
        const { x, y } = response.data.documents[0].address;
        return { lat: parseFloat(y), lon: parseFloat(x) }; // y는 위도, x는 경도
      } else {
        console.error("주소로 좌표 변환에 실패했습니다.");
        return null;
      }
    } catch (error) {
      console.error("좌표 변환 중 오류가 발생했습니다.", error);
      return null;
    }
  };

  const handleDongClick = async (dong: string) => {
    const fullAddress = `${selectedCity} ${selectedDistrict} ${dong}`;
    const coordinates = await getCoordinates(fullAddress); // 좌표를 가져오는 함수 호출

    if (coordinates) {
      const { lat, lon } = coordinates;
      onLocationSelect(fullAddress, lat, lon); // 좌표 전달
    }
    onClose();
  };

  if (!isOpen || !locations) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>
          <div></div>
          <h2>지역 선택</h2>
          <img src={xmark} alt="x" onClick={onClose} />
        </S.ModalHeader>
        <S.ModalHeaderTwo>
          <div>광역시도</div>
          <div>시군구</div>
          <div>읍면동</div>
        </S.ModalHeaderTwo>
        <S.ModalBody>
          <S.Column>
            {Object.keys(locations).map((city) => (
              <S.LocationItem
                key={city}
                onClick={() => handleCityClick(city)}
                isSelected={selectedCity === city}
              >
                {city}
              </S.LocationItem>
            ))}
          </S.Column>
          <S.Column>
            {selectedCity &&
              locations[selectedCity]?.children &&
              Object.keys(locations[selectedCity].children).map((district) => (
                <S.LocationItem
                  key={district}
                  onClick={() => handleDistrictClick(district)}
                  isSelected={selectedDistrict === district}
                >
                  {district}
                </S.LocationItem>
              ))}
          </S.Column>
          <S.Column>
            {selectedDistrict &&
              locations[selectedCity]?.children[selectedDistrict]?.children &&
              Object.keys(
                locations[selectedCity].children[selectedDistrict].children
              ).map((dong) => (
                <S.LocationItem
                  key={dong}
                  onClick={() => handleDongClick(dong)}
                  isSelected={selectedDong === dong}
                >
                  {dong}
                </S.LocationItem>
              ))}
          </S.Column>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default LocationModal;
