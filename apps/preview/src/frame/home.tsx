/** The one video this page plays. */
export interface ChosenVideo {
  id: string;
  title: string;
  src: string;
  poster?: string;
  kind: 'mux' | 'mp4';
}

/** Hosted on Mux, so the deployed page streams a real video with no file bundled. */
export const SINGLE_VIDEO: ChosenVideo = {
  id: 'kanwar-mux',
  title: 'Kanwar',
  src: 'https://stream.mux.com/pEPlVJYPMuiTQFXHuBrxKEou2702HeT1zLxkhRp0098uE.m3u8',
  kind: 'mux',
};
