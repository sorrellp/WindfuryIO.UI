import image from '$lib/assets/gnarlroot.jpg';

export const ColorMappings: { [key: number]: string } = {
    1: 'text-physical',
    2: '',
    3: '',
    4: 'text-fire',
    5: 'text-flamestrike',
    8: 'text-nature',
    12: 'text-volcanic',
    16: 'text-frost',
    28: 'text-elemental',
    32: 'text-shadow',
    36: 'text-shadowflame',
    37: 'text-shadowflame'
};

export const BackgroundColorMappings: { [key: number]: string } = {
    1: 'bg-physical',
    2: '',
    3: '',
    4: 'bg-fire',
    5: 'bg-gradient-to-r from-fire to-physical to-80%',
    8: 'bg-nature',
    12: 'bg-gradient-to-r from-fire to-nature to-80%',
    16: 'bg-frost',
    28: 'bg-gradient-to-r from-fire from-10% via-nature to-frost to-80%',
    32: 'bg-shadow',
    36: 'bg-gradient-to-r from-shadow to-fire to-80%',
    37: 'bg-gradient-to-r from-shadow to-fire to-80%'
};

export const RaidList: { [key: string]: Set<string> } = {
    'amirdrassil': new Set(['gnarlroot'])
}