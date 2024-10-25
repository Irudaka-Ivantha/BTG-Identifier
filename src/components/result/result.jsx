import React from 'react';

function PredictionResult() {
  return (
    <div className="w-full md:w-1/2">
      <h6 className="text-lg font-semibold">Prediction result</h6>
      <div className="w-full mt-4">
        <div>
          <span>TRI 2023</span>
          <div className="mt-1 h-4 w-full bg-yellow-200 rounded">
            <div
              className="h-4 bg-yellow-500 rounded"
              role="progressbar"
              style={{ width: '0%' }}
              id="progress_tri2023"
            >
              0%
            </div>
          </div>
        </div>

        <div className="mt-2">
          <span>TRI 2026</span>
          <div className="mt-1 h-4 w-full bg-blue-200 rounded">
            <div
              className="h-4 bg-blue-500 rounded"
              role="progressbar"
              style={{ width: '0%' }}
              id="progress_tri2026"
            >
              0%
            </div>
          </div>
        </div>

        <div className="mt-2">
          <span>TRI 2025</span>
          <div className="mt-1 h-4 w-full bg-green-200 rounded">
            <div
              className="h-4 bg-green-500 rounded"
              role="progressbar"
              style={{ width: '0%' }}
              id="progress_tri2025"
            >
              0%
            </div>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <span id="probability">Waiting for your input to predict the result...</span>
          <h4 className="mt-2 font-bold text-xl" id="prediction_res">TRI _ _ _ _</h4>
        </div>
      </div>
    </div>
  );
}

export default PredictionResult;
