import { v2 as cloudinary } from 'cloudinary';

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || 'notcmjfs';
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
}

export function cloudinaryUrl(publicId: string, options?: { width?: number }) {
  // Generate the URL using Cloudinary's versioned URL format
  // Pattern: https://res.cloudinary.com/{cloudName}/image/upload/v{version}/{publicId}
  const version = '1786547642';
  const url = `https://res.cloudinary.com/${cloudName}/image/upload/v${version}/${publicId}`;
  console.log(`[Cloudinary] publicId: ${publicId}, URL: ${url}`);
  return url;
}
