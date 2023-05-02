
type BotaoDownloadProps = {
  arquivoPath: string;
  nomeArquivo: string;
};

export function BotaoDownload(props: BotaoDownloadProps): JSX.Element {
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
    // <button onClick={handleDownload}>Baixar {nomeArquivo}</button>
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
              <button
                onClick={handleDownload}
                className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2 rounded-md text-white"
              > Download
              </button>
        </div> 
  );
}
