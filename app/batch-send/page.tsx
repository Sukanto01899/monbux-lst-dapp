import React from "react";
import { NextPage } from "next";
import BatchEthSender from "~~/components/batch-sender/BatchSend";
import AllPasteBatchEthSender from "~~/components/batch-sender/DirectBatchSender";

const BatchSenderPage: NextPage = () => {
  return (
    <>
      {/* <BatchEthSender /> */}
      <AllPasteBatchEthSender />
    </>
  );
};

export default BatchSenderPage;
