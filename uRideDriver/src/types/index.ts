export interface defUserType {
    _id: string;
    fName: string;
    lName: string;
    phoneNo: string;
    profileIC: { uri: string; };
};

type ExtrapolateType = 'extend' | 'identity' | 'clamp';
type InterpolationConfigType = {
    inputRange: number[];
    outputRange: number[] | string[];
    easing?: ((input: number) => number) | undefined;
    extrapolate?: ExtrapolateType | undefined;
    extrapolateLeft?: ExtrapolateType | undefined;
    extrapolateRight?: ExtrapolateType | undefined;
};

type kBehavior = 'height' | 'position' | 'padding' | undefined;

export type { kBehavior, InterpolationConfigType };