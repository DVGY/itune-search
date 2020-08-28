import React from 'react';
import { Card, Image } from 'antd';
import { Col } from 'antd';

import { Typography } from 'antd';

import {
  MusicCardContainer,
  Button,
  CardContentRow,
  Image100x100,
} from './music-card-style';

const { Meta } = Card;
const { Title } = Typography;

// Make the card UI, Searchbar UI and whole layout at the end,loading UI
// Ptimize at the end
const MusicCard = ({
  trackId,
  artistName,
  artistViewUrl,
  artworkUrl100,
  collectionPrice,
  kind,
  trackPrice,
  previewUrl,
  collectionName,
  collectionViewUrl,
}) => {
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={6}>
      <MusicCardContainer hoverable className="music-card">
        <CardContentRow alignCenter>
          <Image100x100 width={100} height={100} src={artworkUrl100} />
        </CardContentRow>
        <CardContentRow alignCenter>
          <Title level={3}>
            {artistName ? artistName.split(/[,&]/)[0] : artistName}
          </Title>
        </CardContentRow>

        <CardContentRow alignCenter>
          <Button primary>${collectionPrice}</Button>
          <Button>${trackPrice}</Button>
        </CardContentRow>
      </MusicCardContainer>
    </Col>
  );
};

export default MusicCard;
