import React from "react";

const LeftSide = ({
  incomeForm,
  formVisible,
  splitAmounts,
  handleNeedsForm,
  handleWantsForm,
  handleInvestForm,
}) => {
  return (
    <>
      <div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3 shadow-3xl  border border-[#FFE0CA]-300  ">
        <h2 className="mainheading_topleft">Money Management</h2>

        <form onSubmit={incomeForm.handleSubmit}>
          <div className="inputfield">
            <label className="text-sm font-medium">Enter Monthly Income</label>
            <input
              name="income"
              type="number"
              min="0"
              placeholder="100000"
              value={incomeForm.values.income}
              onChange={incomeForm.handleChange}
            />
            <p
              className={
                incomeForm.touched.income && incomeForm.errors.income
                  ? "text-red-600  text-xs font-medium"
                  : ""
              }
            >
              {incomeForm.touched.income && incomeForm.errors.income
                ? incomeForm.errors.income
                : ""}
            </p>
          </div>

          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Manage Income
          </button>
        </form>

        <div className="needs_wants_invest_parent mt-6 ">
          <p className="text-sm font-medium ">*50-30-20 Rule of Budgeting*</p>
          <div className="split_in_needs_wants_invest">
            <div
              className={` ${
                formVisible === 0
                  ? "bg-gradient-to-tl from-orange-200 via-orange-50 to-orange-200  border-2 border-orange-200 shadow-xl"
                  : "bg-[#FFFBEC]"
              }    my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col`}
            >
              <p className="font-medium text-sm mb-3 ">
                Needs (50%):&nbsp; {Math.round(splitAmounts.needs)}
              </p>
              <button
                onClick={handleNeedsForm}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
               Spend On Needs
              </button>
            </div>

            <div
             className={` ${
              formVisible === 1
                ? "bg-gradient-to-tl from-orange-200 via-orange-50 to-orange-200  border-2 border-orange-200 shadow-xl"
                : "bg-[#FFFBEC]"
            }    my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col`}
            >
              <p className="font-medium text-sm mb-3 ">
                Wants (30%):&nbsp; {Math.round(splitAmounts.wants)}
              </p>
              <button
                onClick={handleWantsForm}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Spend On Wants
              </button>
            </div>

            <div
             className={` ${
              formVisible === 2
                ? "bg-gradient-to-tl from-orange-200 via-orange-50 to-orange-200  border-2 border-orange-200 shadow-xl"
                : "bg-[#FFFBEC]"
            }    my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col`}
            >
              <p className="font-medium text-sm mb-3 ">
                Invest (20%):&nbsp; {Math.round(splitAmounts.invest)}
              </p>
              <button
                onClick={handleInvestForm}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Spend On Investments
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
