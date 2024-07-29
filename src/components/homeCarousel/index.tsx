import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CarouselContainer, CarouselItem, Title } from './styles';

interface CarouselProps {
  data: Array<{ id: string; title: string }>;
}

export function Carousel({ data }: CarouselProps) {

    const [selectedId, setSelectedId ] = useState<string>(data[0]?.id || '');


  return (
    <CarouselContainer>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <CarouselItem
            style={{
              marginLeft: index === 0 ? 16 : 12,
              marginRight: index === data.length - 1 ? 16 : 12,
              backgroundColor: item.id === selectedId ? '#0961C9' : '#CBEBFC'
            }}
          >
            <TouchableOpacity
                onPress={()=> setSelectedId(item.id)}
            >
                <Title
                    style={{
                        color: item.id === selectedId ? '#FFFFFF' : '#3D3E44'
                    }}
                >{item.title}</Title>
            </TouchableOpacity>
          </CarouselItem>
        )}
      />
    </CarouselContainer>
  );
}
