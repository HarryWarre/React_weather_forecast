import CurrentWeather from "./currentWeather";

function MainGraphic() {
  return (
    <section className='vh-150'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-12 col-xl-10'>
            <div className='card shadow-0 border border-dark border-5 text-dark rounded'>
              <div className='card-body p-4'>
                <div className='row text-center'>
                  <div className='col-md-9 text-center border-end border-5 border-dark py-4'>
                    <CurrentWeather />

                    <div className='d-flex justify-content-around align-items-center mb-3'>
                      <div
                        className='flex-column border rounded border-1 p-1'
                        // style={{'border-radius: 10px'}, {'padding: .75rem'}}
                      >
                        <p className='small mb-1 p-1'>Sun</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                      <div className='flex-column p-1'>
                        <p className='small mb-1'>Mon</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                      <div className='flex-column p-1'>
                        <p className='small mb-1'>Tue</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                      <div className='flex-column p-1'>
                        <p className='small mb-1'>Wed</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                      <div className='flex-column p-1'>
                        <p className='small mb-1'>Thu</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                      <div className='flex-column p-1'>
                        <p className='small mb-1'>Fri</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                      <div className='flex-column p-1'>
                        <p className='small mb-1'>Sat</p>
                        <p className='small mb-0'>
                          <strong>-4°C</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <p className='small mt-3 mb-2 pb-2'>For a month</p>
                    <p className='pb-1'>
                      <span className='pe-2'>11:00</span> <strong>-4°</strong>
                    </p>
                    <p className='pb-1'>
                      <span className='pe-2'>12:00</span> <strong>-4°</strong>
                    </p>
                    <p className='pb-1'>
                      <span className='pe-2'>13:00</span> <strong>-5°</strong>
                    </p>
                    <p className='pb-1'>
                      <span className='pe-2'>14:00</span> <strong>-7°</strong>
                    </p>
                    <p className='pb-1'>
                      <span className='pe-2'>15:00</span> <strong>-6°</strong>
                    </p>
                    <p className='pb-1'>
                      <span className='pe-2'>16:00</span> <strong>-4°</strong>
                    </p>
                    <p>
                      <span className='pe-2'>17:00</span> <strong>-3°</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainGraphic;
