/** @jsxImportSource react */

import { Controls, Time } from '@videojs/react';
import type { ReactNode } from 'react';

import { CaptionsToggle } from './captions-button';
import { ControlsContent, type ControlsSlots } from './controls';
import { PlayButton } from './play-button';
import { ScreenControls } from './screen-controls';
import { SettingsMenu } from './settings-menu';
import { TimeSlider } from './time-slider';
import { VideoBufferingIndicator } from './video-feedback';
import { VolumeControl } from './volume-control';

/**
 * The deck, left to right: the orange PLAY key, the tape-groove
 * timeline, the volume fader, the pale function keys (CC, SET, AIR,
 * PIP, FULL), and the LCD with the time in the right corner.
 *
 * Everything sits on one moulded panel, so the controls read as a
 * piece of hardware parked over the video instead of a web bar
 * floating on it.
 */
export function VideoControlsContent({
  center = false,
  live = false,
  renderThumbnail,
  seekBackward,
  seekForward,
}: ControlsSlots & { center?: boolean; live?: boolean; menu?: ReactNode } = {}) {
  return (
    <>
      <Controls.Backdrop className={'video-controls-backdrop'} />
      <VideoBufferingIndicator />
      <ControlsContent
        center={center}
        live={live}
        renderThumbnail={renderThumbnail}
        seekBackward={seekBackward}
        seekForward={seekForward}
        top={
          <div className={'ko-deck'}>
            <div className={'ko-keys'}>
              <div className={'ko-cluster ko-cluster-left'}>
                <div className={'ko-transport'}>
                  <PlayButton />
                  <TimeSlider />
                </div>
              </div>
              <Time.Group className={'ko-lcd'}>
                <Time.Value className={'ko-lcd-value'} type="current" />
                <Time.Separator className={'ko-lcd-sep'} />
                <Time.Value className={'ko-lcd-value ko-lcd-duration'} type="duration" />
              </Time.Group>
              <div className={'ko-cluster ko-cluster-right'}>
                <CaptionsToggle />
                <SettingsMenu />
                <VolumeControl />
                <ScreenControls />
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
