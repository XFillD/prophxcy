declare module "use-sound" {
  export default function useSound(
    url: string,
    options?: {
      volume?: number;
      playbackRate?: number;
      soundEnabled?: boolean;
      interrupt?: boolean;
      onload?: () => void;
      onplay?: () => void;
      onend?: () => void;
      onpause?: () => void;
      format?: [string];
    }
  ): [() => void, { stop: () => void, pause?: any, sound?: any }];
}
