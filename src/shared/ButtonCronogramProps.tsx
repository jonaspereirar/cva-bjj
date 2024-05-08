
type ButtonCronogramProps = {
  arquivoPath: string;
  nomeArquivo: string;
};

export function ButtonCronograma(props: ButtonCronogramProps): JSX.Element {
  const { arquivoPath, nomeArquivo } = props;

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
    downloadFile(arquivoPath, nomeArquivo);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-400 active:bg-blue-500 px-4 py-2 rounded-md text-white"
        style={{ marginTop: '10px' }} // Ajuste para mais centralizado
      >
        Download
      </button>
    </div>
  );
}
