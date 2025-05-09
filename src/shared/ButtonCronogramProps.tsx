import { useRef } from 'react';

type ButtonCronogramProps = {
  arquivoPath: string;
  nomeArquivo: string;
};

export function ButtonCronograma(props: ButtonCronogramProps): JSX.Element {
  const { arquivoPath, nomeArquivo } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  function playSound() {
    audioRef.current?.play();
  }

  function downloadFile(arquivoPath: string, nomeArquivo: string): void {
    fetch(arquivoPath)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', nomeArquivo);
        document.body.appendChild(link);
        link.click();
      });
  }

  function handleDownload(): void {
    playSound();
    downloadFile(arquivoPath, nomeArquivo);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
      <button
        onClick={handleDownload}
        onMouseEnter={playSound}
        className="btn-animado"
        style={{ marginTop: '10px' }}
      >
        Download
      </button>

      {/* Som */}
      <audio ref={audioRef} src="/click.mp3" preload="auto" />

      {/* Estilo embutido */}
      <style>{`
        @keyframes shimmer {
          0% {
            box-shadow: 0 0 5px #00ffff, 0 0 15px #00ffff, 0 0 30px #00ffff;
          }
          50% {
            box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
          }
          100% {
            box-shadow: 0 0 5px #00ffff, 0 0 15px #00ffff, 0 0 30px #00ffff;
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-3px); }
          40%, 80% { transform: translateX(3px); }
        }

        .btn-animado {
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          animation: shimmer 2s infinite alternate, shake 1.2s infinite;
          transition: background-color 0.3s ease;
        }

        .btn-animado:hover {
          background-color: #60a5fa;
        }

        .btn-animado:active {
          background-color: #3b82f6;
        }
      `}</style>
    </div>
  );
}