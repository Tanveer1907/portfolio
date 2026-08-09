"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

export const PORTFOLIO_BOARD_MESSAGES: string[] = [
  "WELCOME TO MY \nPORTFOLIO \n- TANVEER SINGH",
  "SOFTWARE \nDEVELOPER & CS \nSTUDENT",
  "BUILDING \nSCALABLE SYSTEMS \n& INTUITIVE UX",
  "CLICK BELOW \nTO LOAD 3D \nEXPERIENCE",
];

export default function TextFlippingBoardDemo() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % PORTFOLIO_BOARD_MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 my-2">
      <TextFlippingBoard text={PORTFOLIO_BOARD_MESSAGES[msgIdx]} />
    </div>
  );
}
