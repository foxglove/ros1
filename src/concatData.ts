export function concatData(chunks: Uint8Array[]): Uint8Array {
  if (chunks.length === 1 && chunks[0] != null) {
    return chunks[0];
  }

  const totalLength = chunks.reduce((len, chunk) => len + chunk.length, 0);
  const result = new Uint8Array(totalLength);

  let idx = 0;
  for (const chunk of chunks) {
    result.set(chunk, idx);
    idx += chunk.length;
  }
  return result;
}
