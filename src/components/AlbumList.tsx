"use client";

import AlbumGrid from "@/components/AlbumGrid";
import AlbumRowList from "@/components/AlbumRowList";
import { Grid3x3, Rows3 } from "lucide-react";
import { Button } from "@/components/Button";

import { useAtom } from "jotai";
import { isGridAtom } from "@/atoms/view";

export function AlbumListToggle() {
  const [isGrid, setIsGrid] = useAtom(isGridAtom);

  function handleGridToggle() {
    setIsGrid((prev) => !prev);
  }

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <Button
        className="absolute right-10 top-10 z-50 flex size-10 items-center justify-center rounded border border-accent-3 bg-accent-2"
        type={"button"}
        onClick={() => handleGridToggle()}
      >
        {isGrid ? <Rows3 className="size-5" /> : <Grid3x3 className="size-5" />}
      </Button>
      {isGrid ? <AlbumGrid /> : <AlbumRowList />}
    </div>
  );
}
