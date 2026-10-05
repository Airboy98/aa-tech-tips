import { useState } from "react";
import Collapsible from "react-collapsible";
import "./ai.css";

export default function AI() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <>
      {zoomedImage && (
        <div className="ai-lightbox" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage.src} alt={zoomedImage.alt} />
        </div>
      )}
      <div className="section-header">
        <h1>Artificial / Super Intelligence</h1>
      </div>

      <h2>Fundamentals</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">AI Vocabulary</button>}
      >
        <div className="ai">
          <table className="ai-examples-table">
            <thead>
              <tr>
                <th>Word or Phrase</th>
                <th>Definition</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI (Artificial Intelligence)</td>
                <td>
                  A field of computer science focused on simulating
                  machine-based intelligence
                </td>
                <td>LLMs, self-driving cars</td>
              </tr>
              <tr>
                <td>Algorithm</td>
                <td>
                  A set of rules to determine what content to show you based on
                  your activity
                </td>
                <td>Netflix recommending movies</td>
              </tr>
              <tr>
                <td>Context Window</td>
                <td>
                  The amount of a conversation an LLM can consider at once
                </td>
                <td>An LLM's short term memory</td>
              </tr>
              <tr>
                <td>Generative AI</td>
                <td>
                  AI that creates new content instead of just analyzing existing
                  information
                </td>
                <td>Using Gemini to generate a picture</td>
              </tr>
              <tr>
                <td>Hallucination</td>
                <td>
                  An incorrect or made-up response stated by an LLM with
                  confidence
                </td>
                <td>ChatGPT stating a lie as a fact</td>
              </tr>
              <tr>
                <td>LLM (Large Language Model)</td>
                <td>
                  A deep learning model pre-trained on vast amounts of data
                </td>
                <td>ChatGPT, Claude, Gemini</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>A specific version of an LLM</td>
                <td>ChatGPT-6 Sol, Claude Opus 5.5</td>
              </tr>
              <tr>
                <td>Multimodal</td>
                <td>
                  An LLM that understands or creates more than just text, such
                  as images, audio, or video
                </td>
                <td>Grok creating an image or video</td>
              </tr>
              <tr>
                <td>Prompt</td>
                <td>
                  A specifically worded query typed to an LLM to generate a
                  response
                </td>
                <td>"Generate a song with 80s vibes"</td>
              </tr>
              <tr>
                <td>Token</td>
                <td>
                  A unit of text used to measure how much an LLM reads or writes
                </td>
                <td>50 tokens used to analyze a doc</td>
              </tr>
              <tr>
                <td>Training Data</td>
                <td>
                  The information an LLM learned from before it was released
                </td>
                <td>Books, websites, articles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">What is AI?</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>In Plain Terms</u>
            </h3>
            <h4>A simple way to think about it</h4>
            <ul>
              <li>
                A computer program that can learn based on your interactions
                with it
              </li>
              <li>
                Responds with content catered to you, such as an answer (LLM) or
                recommendations (algorithm) based on your habits and preferences
              </li>
              <li>
                LLMs like ChatGPT can be used as a chatbot which is the most
                common way people use AI today
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>You've Already Used It</u>
            </h3>
            <h4>AI has quietly been part of everyday tech for years</h4>
            <ul>
              <li>Voice assistants like Siri, Alexa, and Google Assistant</li>
              <li>
                Personalized recommendations on Netflix and other streaming apps
              </li>
              <li>
                Smart Compose or Smart Reply suggestions when writing an email
              </li>
              <li>
                Photo editing tools like Magic Eraser that remove unwanted areas
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Prompting</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Start Simple</u>
            </h3>
            <h4>Write a good first prompt</h4>
            <ul>
              <li>Ask one question at a time</li>
              <li>
                Use plain, everyday language, there's no need for technical
                terms
              </li>
              <li>Give context, like who it's for or why you're asking</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Iteratively Refine</u>
            </h3>
            <h4>Treat it like a conversation</h4>
            <ul>
              <li>
                Too long? Ask it to "shorten that" or "summarize in 2 sentences"
              </li>
              <li>Confusing? Ask it to explain that more simply</li>
              <li>
                Wrong or off-base? Correct it and it will adjust its answer
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Examples</button>}
      >
        <div className="ai">
          <table className="ai-examples-table">
            <th>LLM</th>
            <th>Prompt(s) </th>
            <th>Final Output</th>
            <tr>
              <td>ChatGPT</td>
              <td>
                <ol>
                  <li>Tell me about the Gospels of the Bible</li>
                  <li>Shorten that to summarize in 2 sentences</li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt1.png"
                  alt="prompt1"
                  width="150"
                  height="100"
                  className="ai-zoomable"
                  onClick={() =>
                    setZoomedImage({ src: "images/ai/prompt1.png", alt: "prompt1" })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Claude</td>
              <td>
                <ol>
                  <li>
                    Make a simple word processor that's better than Notepad
                  </li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt5.png"
                  alt="prompt5"
                  width="150"
                  height="150"
                  className="ai-zoomable"
                  onClick={() =>
                    setZoomedImage({ src: "images/ai/prompt5.png", alt: "prompt5" })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Copilot</td>
              <td>
                <ol>
                  <li>
                    Generate a picture of the grand canyon full of plant life
                  </li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt2.png"
                  alt="prompt2"
                  width="150"
                  height="150"
                  className="ai-zoomable"
                  onClick={() =>
                    setZoomedImage({ src: "images/ai/prompt2.png", alt: "prompt2" })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Gemini</td>
              <td>
                <ol>
                  <li>Give me an itinerary on things to do in Rome</li>
                  <li>Condense that to a single day</li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt3.png"
                  alt="prompt3"
                  width="150"
                  height="120"
                  className="ai-zoomable"
                  onClick={() =>
                    setZoomedImage({ src: "images/ai/prompt3.png", alt: "prompt3" })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Grok</td>
              <td>
                <ol>
                  <li>
                    Summarize the attempted assassination of Donald Trump in
                    Butler
                  </li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt4.png"
                  alt="prompt4"
                  width="150"
                  height="150"
                  className="ai-zoomable"
                  onClick={() =>
                    setZoomedImage({ src: "images/ai/prompt4.png", alt: "prompt4" })
                  }
                />
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">AI Safety</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Benefits</u>
            </h3>
            <h4>Productivity and convenience boosters with AI</h4>
            <ul>
              <li>
                Get quick or comprehensive answers without digging through
                search results
              </li>
              <li>Draft or proofread emails, letters, and messages</li>
              <li>Summarize long articles, emails, or documents</li>
              <li>Explain confusing topics in plain language</li>
              <li>Brainstorm ideas, recipes, or gift suggestions</li>
              <li>Generate images, videos, or music from a description</li>
              <li>Delegate complex tasks to an agent</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Hazards</u>
            </h3>
            <h4>
              Like all tools, use this technology responsibly and cautiously
            </h4>
            <ul>
              <li>
                AI generated content is getting concerningly realistic with fake
                voices, videos, or pictures so don't trust everything you see or
                hear
              </li>
              <li>
                AI can confidently give wrong answers, so double-check anything
                important
              </li>
              <li>
                Excessive use of AI can humanize it but it is not a replacement
                for real human interaction and connection
              </li>

              <li>
                Treat AI as a helpful assistant, not a replacement for a doctor,
                lawyer, or other professional
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>

      <h2>Tools</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Large Language Models</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>OpenAI</u>
            </h3>
            <div className="ai-logo">
              <a
                href="https://chatgpt.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/ai/chatgpt.png"
                  alt="ChatGPT"
                  width="150"
                  height="50"
                />
              </a>
            </div>
            <h4>The most widely used LLM and a solid all-around choice</h4>
            <ul>
              <li>General questions, emails, letters, and trip planning</li>
              <li>Generate pictures from a description</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Anthropic</u>
            </h3>
            <div className="ai-logo">
              <a
                href="https://claude.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/ai/claude.png"
                  alt="Claude"
                  width="150"
                  height="32"
                />
              </a>
            </div>
            <h4>Known for careful, detailed, and easy-to-follow answers</h4>
            <ul>
              <li>Writing help and summarizing long documents</li>
              <li>Great for topics where accuracy matters most</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Microsoft</u>
            </h3>
            <div className="ai-logo">
              <a
                href="https://copilot.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/ai/copilot.png"
                  alt="Copilot"
                  width="150"
                  height="50"
                />
              </a>
            </div>
            <h4>Built into Windows 11 and the Edge web browser</h4>
            <ul>
              <li>
                Seamless integration with Microsoft 365 products like Teams and
                Outlook
              </li>
              <li>Can summarize or draft content right inside Office apps</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Google</u>
            </h3>
            <div className="ai-logo">
              <a
                href="https://gemini.google.com/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/ai/gemini.png"
                  alt="Gemini"
                  width="150"
                  height="50"
                />
              </a>
            </div>
            <h4>Built into many Google products like Gmail and Search</h4>
            <ul>
              <li>Good at pulling in up-to-date information from the web</li>
              <li>AI summary provided with Google searches</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>xAI</u>
            </h3>
            <div className="ai-logo">
              <a
                href="https://grok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/ai/grok.png"
                  alt="Grok"
                  width="150"
                  height="50"
                />
              </a>
            </div>
            <h4>Known for facts and blunter, less biased responses</h4>
            <ul>
              <li>Also built into the X (formerly Twitter) app</li>
              <li>Aware of real-time posts on X</li>
            </ul>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
