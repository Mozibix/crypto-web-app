import React from "react";
import { walletData } from "../../userdata";

export const WalletPage = () => {
  const walletInfo = walletData.map((userCoins) => {
    return <WalletSection {...userCoins} />;
  });

  return (
    <>
      <div className="wallet_section">
        <div className="wallet_section_inner">
          <div className="section_part">
            <div className="up_section">
              <div className="up_section_inner">
                <div className="balance">
                  <p>4,328,000 USD</p>
                </div>
                <div className="username">
                  <p>zobs Violence</p>
                </div>

                <div className="send_recieve_sec">
                  <div className="logos_send_recieve">
                    <ul>
                      <li>
                        <span>logo1</span>
                      </li>
                      <li>
                        <span>logo1</span>
                      </li>
                      <li>
                        <span>logo1</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text_send_recieve">
                    <ul>
                      <li>Send</li>
                      <li>Receive</li>
                      <li>Buy Crypto</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="section_dowm_overall">
              <div className="section_dowm_overall_inner">
                <div className="down_section_header">
                  <ul>
                    <li className="name">Name</li>
                    <li className="last_price">Last Price</li>
                    <li className="change">24h Change</li>
                    <li className="markets">Markets</li>
                  </ul>
                </div>
                <div className="down_section">{walletInfo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const WalletSection = (props) => {
  return (
    <>
      <div className="down_section">
        <div className="down_section_inner">
          <div className="table_section">
            <div className="name_section">
              <ul>
                <li>{props.coin_name}</li>
              </ul>
            </div>
            <div className="price_section">
              <ul>
                <li>{props.last_price}</li>
              </ul>
            </div>
            <div className="change_section">
              <ul>
                <li>{props.change_price}</li>
              </ul>
            </div>
            <div className="markets_section">
              <ul>
                <li>{props.markets_icon}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
