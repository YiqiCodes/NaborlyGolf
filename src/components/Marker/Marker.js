import React, { useState } from "react";

// Antd
import { Modal } from "antd";

// Styles
import "./Marker.css";
import "antd/dist/antd.css";
import * as S from "./Marker.styles";

const Marker = ({
  color,
  city,
  country,
  lat,
  lng,
  leaseTermMonths,
  monthlyRate,
  name,
  totalViews,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <div
          key={name}
          className="pin bounce"
          style={{ backgroundColor: color, cursor: "pointer" }}
          title={name}
          onClick={showModal}
        />
        <div className="pulse" />
      </div>
      <Modal
        visible={isModalVisible}
        centered
        footer={null}
        keyboard={true}
        closable={true}
        bodyStyle={{
          padding: 0,
        }}
        width={"50%"}
        onCancel={handleCancel}
      >
        <S.ModalContainer>
          <div>Property Name: {name}</div>
          <div>City: {city}</div>
          <div>Country: {country}</div>
          <div>Lease Term: {leaseTermMonths}</div>
          <div>Monthly Rate: {monthlyRate}</div>
          <div>Latitude: {lat}</div>
          <div>Longitude: {lng}</div>
          <div>Total Views: {totalViews}</div>
        </S.ModalContainer>
      </Modal>
    </>
  );
};
export default Marker;
