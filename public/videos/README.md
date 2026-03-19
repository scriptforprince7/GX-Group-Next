# Videos Directory

Place your video files in this directory to use them as backgrounds.

## Current Setup

The Enterprise Solutions section is configured to use:
- `/videos/globe-network.mp4`

## Adding Your Video

1. Place your video file in this directory
2. Update the video source in `app/[locale]/(marketing)/page.tsx`:
   ```tsx
   <EnterpriseSolutionsSection locale={locale} videoSource="/videos/your-video.mp4" />
   ```

## Supported Formats

- MP4 (recommended)
- WebM
- OGG

## Video Requirements

- Resolution: 1920x1080 or higher
- Duration: 10-30 seconds (looped)
- File size: Under 10MB for optimal performance
- Content: Globe, network nodes, or tech-related animations

## Fallback

If no video is provided, the section will use CSS animations as a fallback.
