import React from 'react';
import { View, Text } from 'react-native';
import { STAR_IC, STAR_IC_FILL } from '~/common/assets/images';
import { mSty, sty } from '~/common/styles';

interface Props {
    height?: number;
    star?: number;
    starSize?: number;
}

const Rating = ({ star, height, starSize }: Props) => {
    // return <STAR_IC_FILL /> based on star number into 5 stars else return <STAR_IC /> for empty stars,
    // if star is not provided then return <STAR_IC /> for 5 stars else return <STAR_IC_FILL /> for star number
    // remove point value from star number
    const size = starSize || 20;
    const starNumber = star ? parseInt(star.toString().split('.')[0]) : 5;
    const starArr = [];
    for (let i = 0; i < starNumber; i++) {
        starArr.push(<STAR_IC_FILL key={i} height={size} width={size} />);
    }
    for (let i = starNumber; i < 5; i++) {
        starArr.push(<STAR_IC key={i} height={size} width={size} />);
    }
    return (
        <View style={[sty.rowAc, { height: height ? height : 40, paddingHorizontal: 5 }]}>
            {starArr}
        </View>
    );
};

export default Rating;