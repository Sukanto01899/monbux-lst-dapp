import React from "react";
import { NextPage } from "next";
import AllPasteBatchEthSender from "~~/components/batch-sender/DirectBatchSender";

const BatchSenderPage: NextPage = () => {
  return (
    <>
      <AllPasteBatchEthSender />
    </>
  );
};

export default BatchSenderPage;
