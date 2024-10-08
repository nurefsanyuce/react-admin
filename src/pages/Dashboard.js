import React from "react";

import PageLayout from "../components/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented, reset } from "../redux/counter/counterSlice";

const Dashboard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <PageLayout>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Starter Page</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Starter Page</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <button
            onClick={() => {
              dispatch(decremented());
            }}
          >
            Bir eksilt
          </button>
          <button
            onClick={() => {
              dispatch(incremented());
            }}
          >
            Bir arttır
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            Sayacı Sıfırla
          </button>
          Sayaç: {count}
        </div>
      </div>
    </PageLayout>
  );
};
export default Dashboard;
