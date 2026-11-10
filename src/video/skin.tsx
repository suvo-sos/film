/** @jsxImportSource react */

'use client';

import '../styles/video/scaffold.css';
import './skin.css';
import { Container as ContainerPrimitive, Poster as PosterPrimitive, Slider as SliderPrimitive } from '@videojs/react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/resolve-class-name';

import { VideoGestures } from './behaviors/gestures';
import { VideoHotkeys } from './behaviors/hotkeys';
import { VideoIdleHide } from './behaviors/idle-hide';
import { VideoPlayPauseFlash } from './behaviors/play-pause-flash';
import { VideoRightDragSeek } from './behaviors/right-drag-seek';
import { VideoSkipFlash } from './behaviors/skip-flash';
import { VideoVolumeFlash } from './behaviors/volume-flash';
import { VideoWheelVolume } from './behaviors/wheel-volume';
import { VideoControls } from './controls';
import { ErrorDialog } from './shared/error-dialog';
import { Indicators } from './shared/indicators';
import { SeekIndicator } from './shared/seek-indicator';
import { StatusAnnouncer } from './shared/status-announcer';
import { Poster } from './shared/video-feedback';

export interface VideoSkinProps extends Omit<ContainerPrimitive.Props, 'children'> {
  children?: ReactNode;
  renderPoster?: PosterPrimitive.ImageProps['render'];
  renderThumbnail?: SliderPrimitive.Thumbnail.ImageProps['render'];
}

export function VideoSkin({
  children,
  className,
  renderPoster,
  renderThumbnail,
  ...props
}: VideoSkinProps = {}) {
  return (
    <ContainerPrimitive
      className={cn('media-skin', 'media-container', 'media-video', 'ko-skin', className)}
      data-theme="scaffold"
      data-preset="video"
      {...props}
    >
      {children}
      <Poster renderImage={renderPoster} />
      <ErrorDialog />
      <VideoControls renderThumbnail={renderThumbnail} />

      <VideoHotkeys />
      <VideoGestures />
      <VideoIdleHide />
      <VideoPlayPauseFlash />
      <VideoSkipFlash />
      <VideoVolumeFlash />
      <VideoRightDragSeek />
      <VideoWheelVolume />
      <StatusAnnouncer />
      <Indicators>
        <SeekIndicator />
      </Indicators>
    </ContainerPrimitive>
  );
}
