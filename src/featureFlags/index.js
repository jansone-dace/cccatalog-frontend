import stringToBoolean from '@/utils/stringToBoolean';

// The default fallback for the flags is used for running ests regarding the PhotoDetailPage
const flags = {
  watermark: stringToBoolean(process.env.WATERMARK),
  socialSharing: stringToBoolean(process.env.SOCIAL_SHARING),
};

export default flags;
