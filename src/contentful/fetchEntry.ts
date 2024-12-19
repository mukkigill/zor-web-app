import { client } from "./client";

export default function fetchEntry(entry: string) {
  return client.getEntries({
    content_type: entry,
  });
}