import { RosMsgDefinition } from "@foxglove/rosmsg";
import { LazyMessageReader } from "@foxglove/rosmsg-serialization";

export interface ConnectionStats {
  bytesSent: number;
  bytesReceived: number;
  messagesSent: number;
  messagesReceived: number;
  dropEstimate: number;
}

export interface Connection {
  on(
    eventName: "header",
    listener: (
      header: Map<string, string>,
      msgDef: RosMsgDefinition[],
      msgReader: LazyMessageReader,
    ) => void,
  ): this;
  on(eventName: "message", listener: (msg: unknown, data: Uint8Array) => void): this;

  transportType(): string;

  connect(): Promise<void>;

  connected(): boolean;

  header(): Map<string, string>;

  stats(): ConnectionStats;

  messageDefinition(): RosMsgDefinition[];

  messageReader(): LazyMessageReader | undefined;

  close(): void;

  getTransportInfo(): string;
}
