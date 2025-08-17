package org.example.mappers;

import org.example.dto.SubscriptionDTO;
import org.example.entities.Subscription;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface SubscriptionMapper {

    SubscriptionMapper INSTANCE = Mappers.getMapper(SubscriptionMapper.class);

    SubscriptionDTO subscriptionToSubscriptionDTO(Subscription subscription);

    Subscription subscriptionDTOToSubscription(SubscriptionDTO subscriptionDTO);


}
