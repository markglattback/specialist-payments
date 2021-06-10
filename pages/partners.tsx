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

	.partners-grid {
		display: flex;
		justify-content: space-around;


		@media (max-width: 640px) {
			flex-direction: column;
			align-items: center;
		}

		.partner {
			display: flex;
			align-items: flex-end;
			width: 25%;

			@media (max-width: 640px) {
				width: 50%;
				margin-bottom: 60px;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
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
						<div className="partners-grid">
							<div className="partner">
								<img src="/partners/pax.png" alt="Pax" />
							</div>
							<div className="partner">
								<img src="/partners/dojo.svg" alt="Dojo" />
							</div>
						</div>
					</article>
				</Wrapper>
			</section>
		</>
	);
}
