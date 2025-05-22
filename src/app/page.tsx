'use client'
import BrainSpatial from "./BrainSpatial"

export default function Home() {
  if (typeof window == 'undefined') return;

  return (
    <BrainSpatial gene="SP1" />
  );
}
