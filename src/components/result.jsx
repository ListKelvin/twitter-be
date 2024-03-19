"use client";

import React, { useEffect } from "react";
// import copy from "clipboard-copy";
// import saveAs from "file-saver";
// import { useControls } from "leva";
// import toast from "react-hot-toast";
// import { isGlb } from "@/utils/isExtension";
// import useSandbox from "@/hooks/useSandbox";
// import Viewer from "./viewer";
import Code from "./code";
import useStore from "@/store/store";

const Result = () => {
  const {
    buffers,
    fileName,
    scene,
    code,
    createZip,
    generateScene,
    animations,
  } = useStore();

  // const [config, setConfig] = useControls(() => ({
  //   types: { value: false, hint: "Add Typescript definitions" },
  //   shadows: { value: true, hint: "Let meshes cast and receive shadows" },
  //   instance: { value: false, hint: " Instance re-occuring geometry" },
  //   instanceall: {
  //     label: "instance all",
  //     value: false,
  //     hint: "Instance all geometries (for cheaper re-use)",
  //   },
  //   verbose: { value: false, hint: "Verbose output w/ names and empty groups" },
  //   keepnames: {
  //     value: false,
  //     label: "keep names",
  //     hint: "Keep original names",
  //   },
  //   keepgroups: {
  //     value: false,
  //     label: "keep groups",
  //     hint: "Keep (empty) groups",
  //   },
  //   meta: { value: false, hint: "Include metadata (as userData)" },
  //   precision: {
  //     value: 3,
  //     min: 1,
  //     max: 8,
  //     step: 1,
  //     hint: "Number of fractional digits (default: 2)",
  //   },
  // }));

  // const preview = useControls(
  //   "preview",
  //   {
  //     autoRotate: true,
  //     contactShadow: true,
  //     intensity: {
  //       value: 1,
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //       label: "light intensity",
  //     },
  //     preset: {
  //       value: "rembrandt",
  //       options: ["rembrandt", "portrait", "upfront", "soft"],
  //     },
  //     environment: {
  //       value: "city",
  //       options: [
  //         "",
  //         "sunset",
  //         "dawn",
  //         "night",
  //         "warehouse",
  //         "forest",
  //         "apartment",
  //         "studio",
  //         "city",
  //         "park",
  //         "lobby",
  //       ],
  //     },
  //   },
  //   { collapsed: true }
  // );

  // const [loading, sandboxId, error, sandboxCode] = useSandbox({
  //   buffers,
  //   code,
  //   config: { ...config, ...preview },
  // });

  // useEffect(() => {
  //   startTransition(() => {
  //     setConfig({ verbose: animations });
  //   });
  // }, [animations]);

  useEffect(() => {
    generateScene({
      types: false,
      shadows: true,
      instance: false,
      instanceall: false,
      verbose: false,
      keepnames: false,
      keepgroups: false,
      meta: false,
      precision: 3,
    });
  }, []);

  // const download = useCallback(async () => {
  //   createZip({ sandboxCode });
  // }, [sandboxCode]);

  // const exports = useMemo(() => {
  //   const temp = {};
  //   temp["copy to clipboard"] = button(() =>
  //     toast.promise(copy(code), {
  //       loading: "Loading",
  //       success: () => `Successfully copied`,
  //       error: (err) => err.toString(),
  //     })
  //   );
  //   temp["download zip"] = button(() =>
  //     toast.promise(download(), {
  //       loading: "Loading",
  //       success: () => `Ready for download`,
  //       error: (err) => err.toString(),
  //     })
  //   );

  //   if (!isGlb(fileName) && !error) {
  //     const name = "codesandbox" + (loading ? " loading" : "");
  //     temp[name] = button(() => {
  //       location.href = sandboxId
  //         ? `https://codesandbox.io/s/${sandboxId}?file=/src/Model.${config.types ? "tsx" : "js"}`
  //         : "#";
  //     });
  //   }

  //   temp["download image"] = button(() => {
  //     var image = document
  //       .getElementsByTagName("canvas")[0]
  //       .toDataURL("image/png")
  //       .replace("image/png", "image/octet-stream");

  //     saveAs(image, `${fileName.split(".")[0]}.png`);
  //   });

  //   return temp;
  // }, [fileName, loading, error, sandboxCode, sandboxId, config.types]);

  // useControls("exports", exports, { collapsed: true }, [exports]);

  return (
    <div className="h-full w-screen">
      {!code && !scene ? (
        <p className="text-4xl font-bold w-screen h-screen flex justify-center items-center">
          Loading ...
        </p>
      ) : (
        <div className="grid grid-cols-5 h-full">
          {code && <Code>{code}</Code>}
        </div>
      )}
    </div>
  );
  // <section className="h-full w-full col-span-2">
  //   {scene && <Viewer {...config} {...preview} />}
  // </section>
  // <Leva hideTitleBar collapsed />
};

export default Result;
