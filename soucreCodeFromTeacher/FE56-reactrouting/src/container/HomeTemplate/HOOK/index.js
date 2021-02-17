import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./Child";

function DemoHOOK() {
  const result = useState(1);
  console.log(result); // [ 1 , f() ]
  const [count, setCount] = result;
  const [name, setName] = useState("Yasuo");

  /**
   * useEffect không có tham số thứ 2
   *  chạy trong 3 giai đoạn : mounting , updating , unmuonting
   */
  useEffect(() => {
    // console.log("useEffect không có tham số thứ 2");
    return () => {
      // clear các tác dụng phụ
      // console.log("useEffect không có tham số thứ 2 , unmounting");
    };
  });
  /**
   * useEffect có tham số thứ là một mãng không rỗng
   *  name thay đổi thì useEffect chạy lại
   */
  useEffect(() => {
    // call api ngay đây
    // console.log("useEffect có tham số thứ là một mãng không rỗng");
    return () => {};
  }, [name]);
  /**
   * useEffect có tham số thứ 2 là một mãng rỗng
   *  chỉ chạy khi mounting vào cây DOM
   */
  useEffect(() => {
    // call api ngay đây
    // console.log(" useEffect có tham số thứ 2 là một mãng rỗng");
    return () => {};
  }, []);

  const showCode = () => {
    console.log("showCode");
  };
  const showCodeCallBack = useCallback(showCode, []);
  const stringCode = "adssadsdsda";

  const tapDem = () => {
    let tong = 0;
    for (let index = 0; index < count; index++) {
      console.log(index);
      tong += index;
    }
    return tong;
  };

  const tapDemUseMemo = useMemo(tapDem, [count]);

  return (
    <div className="text-center">
      <p>{tapDemUseMemo}</p>
      <Child showCode={showCodeCallBack} stringCode={stringCode} />
      <h2>DemoHOOK</h2>
      <p>{count}</p>
      <button
        className="btn btn-info"
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        Tăng 1
      </button>

      <p>{name}</p>
      <button
        onClick={() => {
          setName("Yone");
        }}
      >
        set name
      </button>
    </div>
  );
}

export default DemoHOOK;
