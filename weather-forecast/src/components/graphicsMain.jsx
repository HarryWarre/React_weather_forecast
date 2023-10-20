import CurrentWeather from "./currentWeather";
import DayWeather from "./dayWeather";
import WeekWeather from "./weekWeather";

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

                    <WeekWeather />
                  </div>
                  <div className='mt-4 col-md-3'>
                    <DayWeather />
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
