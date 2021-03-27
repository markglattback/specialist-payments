import styled from "styled-components";
import Container from "styled-components/Container";
import Benefit from "components/Benefit";
import Head from "next/head";

const Wrapper = styled(Container)`
  margin-top: 7rem;
  margin-bottom: 7rem;
  text-align: center;

  h1 {
    margin-bottom: 3rem;

    @media screen and (max-width: 480px) {
      margin-bottom: 7rem;
    }
  }

  h2 {
    color: var(--brand);
    margin-bottom: 3rem;
  }

  p {
    text-align: left;
  }

  div.partner-grid {
    display: grid;
		grid-template-columns: repeat(4, 1fr);
    padding: 0;
    margin: 0 auto;
		margin-bottom: 60px;
		width: 100%;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}

    div {
      display: flex;
      justify-content: center;
      align-items: center;
			padding: 30px;

			@media (max-width: 640px) {
				padding: 30px 90px;
			}
    }

    img {
			width: 100%;
			height: auto;
    }

	
  }

	div.pairing {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		@media (max-width: 640px) {
			flex-direction: column;
		}

    div {
      display: flex;
      justify-content: center;
      align-items: center;
			width: calc((100% - 240px) / 4);
			
			@media (max-width: 640px) {
				width: 100%;
				padding: 30px 100px;
			}
    }

		.text {
			flex: 0 0 auto;
			font-size: 14px;
			margin-left: 25px;
			margin-right: 12px;
			width: fit-content;
			
			@media (max-width: 640px) {
				margin-left: 0px;
				margin-right: 0px;
			}
		}

    img {
			width: 100%;
			height: auto;
    }
	}
`;

export default function Partners() {
	return (
		<>
			<Head>
				<title>Partners | Specialist Payments</title>
			</Head>
			<section id="partners">
				<Wrapper>
					<article>
						<div className="partners">
							<h1>Partners</h1>
						</div>
						<div className="partner-grid">
							<div>
								<img src="/partners/pax.png" alt="Pax" />
							</div>
							<div>
								<img src="/partners/eposnow.svg" alt="EposNow" />
							</div>
							<div>
								<img src="/partners/fiserve.png" alt="Fiserve" />
							</div>
							<div>
								<img src="/partners/ingenico.png" alt="Ingenico" />
							</div>
							<div>
								<img src="/partners/iZettle.png" alt="iZettle" />
							</div>
							<div>
								<img src="/partners/square.png" alt="Square" />
							</div>
							<div>
								<img src="/partners/sumup.png" alt="Sumup" />
							</div>
							<div>
								<img src="/partners/verifone.png" alt="Verifone" />
							</div>
						</div>
						<div className="pairing">
							<div>
								<img src="/partners/utp-logo-x2.png" alt="UTP" />
							</div>
							<div className="text">in association with</div>
							<div>
								<img src="/partners/barclays.png" alt="Barclays" />
							</div>
						</div>
					</article>
				</Wrapper>
			</section>
		</>
	);
}
