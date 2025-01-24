// import { useEffect, useState } from "react";
// import { Box } from "@mui/material";

// interface Sample {
//   x: number;
//   y: number;
//   taken: boolean;
// }

// interface VisualizationProps {
//   speed: number;
//   commands: string;
//   onCommandComplete: () => void;
// }

// const Visualization = ({
//   speed,
//   commands,
//   onCommandComplete,
// }: VisualizationProps) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [samples, setSamples] = useState<Sample[]>([]);
//   const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

//   // Генерация случайных пробирок при загрузке
//   useEffect(() => {
//     const generateSamples = () => {
//       const samples: Sample[] = [];
//       for (let i = 0; i < 3; i++) {
//         samples.push({
//           x: Math.floor(Math.random() * 10),
//           y: Math.floor(Math.random() * 10),
//           taken: false,
//         });
//       }
//       setSamples(samples);
//     };
//     generateSamples();
//   }, []);

//   // Обработка команд
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentCommandIndex < commands.length) {
//         const command = commands[currentCommandIndex];
//         handleCommand(command);
//         setCurrentCommandIndex((prev) => prev + 1);
//       } else {
//         onCommandComplete();
//         clearInterval(interval);
//       }
//     }, 1000 / speed);

//     return () => clearInterval(interval);
//   }, [commands, currentCommandIndex, speed]);

//   const handleCommand = (command: string) => {
//     switch (command) {
//       case "л":
//         setPosition((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
//         break;
//       case "п":
//         setPosition((prev) => ({ ...prev, x: Math.min(9, prev.x + 1) }));
//         break;
//       case "в":
//         setPosition((prev) => ({ ...prev, y: Math.max(0, prev.y - 1) }));
//         break;
//       case "н":
//         setPosition((prev) => ({ ...prev, y: Math.min(9, prev.y + 1) }));
//         break;
//       case "о":
//         const sampleIndex = samples.findIndex(
//           (sample) =>
//             sample.x === position.x && sample.y === position.y && !sample.taken
//         );
//         if (sampleIndex !== -1) {
//           setSamples((prev) =>
//             prev.map((sample, index) =>
//               index === sampleIndex ? { ...sample, taken: true } : sample
//             )
//           );
//         }
//         break;
//       case "б":
//         const placedSampleIndex = samples.findIndex(
//           (sample) =>
//             sample.x === position.x && sample.y === position.y && sample.taken
//         );
//         if (placedSampleIndex !== -1) {
//           setSamples((prev) =>
//             prev.map((sample, index) =>
//               index === placedSampleIndex ? { ...sample, taken: false } : sample
//             )
//           );
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: 400,
//         height: 400,
//         margin: "60px",
//         border: "1px solid black",
//         position: "relative",
//       }}
//     >
//       {samples.map(
//         (sample, index) =>
//           !sample.taken && (
//             <Box
//               key={index}
//               sx={{
//                 width: 40,
//                 height: 40,
//                 borderRadius: "50%",
//                 bgcolor: "secondary.main",
//                 position: "absolute",
//                 left: sample.x * 40,
//                 top: sample.y * 40,
//               }}
//             />
//           )
//       )}
//       <Box
//         sx={{
//           width: 40,
//           height: 40,
//           bgcolor: "primary.main",
//           position: "absolute",
//           left: position.x * 40,
//           top: position.y * 40,
//         }}
//       />
//     </Box>
//   );
// };

// export default Visualization;

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface Sample {
  x: number;
  y: number;
  taken: boolean;
}

interface VisualizationProps {
  speed: number;
  commands: string;
  onCommandComplete: () => void;
}

const Visualization = ({
  speed,
  commands,
  onCommandComplete,
}: VisualizationProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [samples, setSamples] = useState<Sample[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [heldSample, setHeldSample] = useState<Sample | null>(null); // Для хранения взятого образца

  // Генерация случайных пробирок при загрузке
  useEffect(() => {
    const generateSamples = () => {
      const samples: Sample[] = [];
      for (let i = 0; i < 3; i++) {
        samples.push({
          x: Math.floor(Math.random() * 10),
          y: Math.floor(Math.random() * 10),
          taken: false,
        });
      }
      setSamples(samples);
    };
    generateSamples();
  }, []);

  // Сброс индекса команд при изменении commands
  useEffect(() => {
    setCurrentCommandIndex(0);
  }, [commands]);

  // Обработка команд
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCommandIndex < commands.length) {
        const command = commands[currentCommandIndex];
        handleCommand(command);
        setCurrentCommandIndex((prev) => prev + 1);
      } else {
        onCommandComplete();
        clearInterval(interval);
      }
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [commands, currentCommandIndex, speed]);

  const handleCommand = (command: string) => {
    switch (command) {
      case "л":
      case "Л":
        setPosition((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
        break;
      case "п":
      case "П":
        setPosition((prev) => ({ ...prev, x: Math.min(9, prev.x + 1) }));
        break;
      case "в":
      case "В":
        setPosition((prev) => ({ ...prev, y: Math.max(0, prev.y - 1) }));
        break;
      case "н":
      case "Н":
        setPosition((prev) => ({ ...prev, y: Math.min(9, prev.y + 1) }));
        break;
      case "о":
      case "О":
        const sampleIndex = samples.findIndex(
          (sample) =>
            sample.x === position.x && sample.y === position.y && !sample.taken
        );
        if (sampleIndex !== -1) {
          setSamples((prev) =>
            prev.map((sample, index) =>
              index === sampleIndex ? { ...sample, taken: true } : sample
            )
          );
          setHeldSample(samples[sampleIndex]);
        }
        break;
      case "б":
      case "Б":
        if (heldSample) {
          setSamples((prev) =>
            prev.map((sample) =>
              sample.x === heldSample.x && sample.y === heldSample.y
                ? { ...sample, taken: false }
                : sample
            )
          );
          setHeldSample(null); // Сбрасываем взятый образец
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        margin: "60px",
        border: "1px solid black",
        position: "relative",
      }}
    >
      {samples.map(
        (sample, index) =>
          !sample.taken && (
            <Box
              key={index}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "secondary.main",
                position: "absolute",
                left: sample.x * 40,
                top: sample.y * 40,
              }}
            />
          )
      )}
      <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: "primary.main",
          position: "absolute",
          left: position.x * 40,
          top: position.y * 40,
        }}
      />
    </Box>
  );
};

export default Visualization;
