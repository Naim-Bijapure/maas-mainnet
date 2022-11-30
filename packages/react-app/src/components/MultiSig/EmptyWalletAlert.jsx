import React, { useEffect } from "react";

import { Alert, Button, Col, Row } from "antd";
import { useStore } from "../../store/useStore";
import { useParams } from "react-router-dom";

const EmptyWalletAlert = ({ isFactoryDeployed, setIsCreateModalVisible }) => {
  const [_state, dispatch] = useStore();

  const walletParams = useParams();

  useEffect(() => {
    if ("walletAddress" in walletParams && "networkName" in walletParams) {
      dispatch({ payload: { walletParams } });
    } else {
      dispatch({ payload: { walletParams: undefined } });
    }
  }, [walletParams]);

  return (
    <>
      {isFactoryDeployed !== undefined && (
        <Row style={{ marginTop: 40 }}>
          <Col span={12} offset={6}>
            <Alert
              message={
                <>
                  ✨{" "}
                  <Button onClick={() => setIsCreateModalVisible(true)} type="link" style={{ padding: 0 }}>
                    Create
                  </Button>{" "}
                  or select your Multi-Sig ✨
                </>
              }
              type="info"
            />
          </Col>
        </Row>
      )}

      {isFactoryDeployed === undefined && (
        <Row style={{ marginTop: 40 }}>
          <Col span={12} offset={6}>
            <Alert
              message={<> Sorry multisig not awailable on this network 😥 ( please change the network) </>}
              type="error"
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default EmptyWalletAlert;
