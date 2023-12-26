import Collapsible from "react-collapsible";

export default function Streaming() {
  return (
    <>
      <h1>Streaming Troubleshooting</h1>
      <hr></hr>
      <Collapsible trigger={<button className="collapsible-trigger">Streaming Services</button>}>
      <ul>
        <li>
          <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/streaming/youtube.png" alt="Youtube" width="100" height="50" />
            </a>
        </li>
        <li>
          <a
                    href="https://tv.youtube.com/welcome/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/streaming/youtubetv.png" alt="Youtube" width="100" height="50" />
            </a>
        </li>
        <li>
          <a
                  href="https://netflix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/streaming/netflix.png" alt="Netflix" width="100" height="50" />
          </a>
        </li>
        <li>
          <a
                  href="https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/streaming/prime.png" alt="Prime Video" width="100" height="50" />
          </a>
        </li>
        <li>
          <a
                    href="https://www.max.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/streaming/hbo.png" alt="HBO Max" width="100" height="50" />
          </a>
        </li>
        <li>
        <a
                  href="https://www.hulu.com/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/streaming/hulu.png" alt="Prime Video" width="100" height="50" />
          </a>
        </li>
        <li>
          <a
                    href="https://www.peacocktv.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/streaming/peacock.png" alt="Peacock" width="100" height="50" />
          </a>
        </li>
        <li>
          <a
                    href="https://www.disneyplus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./images/streaming/disney.png" alt="Disney+" width="100" height="50" />
          </a>
        </li>
        
        <li>
        <a
                  href="https://www.paramountplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/streaming/paramount.png" alt="Paramount+" width="100" height="50" />
          </a>
        </li>
        <li>
        <a
                  href="https://www.discoveryplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/streaming/discovery.png" alt="Paramount+" width="100" height="50" />
          </a>
        </li>
        <li>
        <a
                  href="https://tv.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/streaming/appletvplus.png" alt="Prime Video" width="100" height="50" />
          </a>
        </li>
      </ul>
      </Collapsible>
    </>
  );
}
