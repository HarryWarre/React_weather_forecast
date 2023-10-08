import "../style/sidenav.scss";

function SideNav() {
  return (
    <>
      <header>
        <nav
          id='sidebarMenu'
          className='collapse d-lg-block sidebar collapse bg-white'
        >
          <div className='position-sticky'>
            <div className='list-group list-group-flush mx-3 mt-4'>
              <a
                href='#'
                className='list-group-item list-group-item-action py-2 ripple active'
                aria-current='true'
              >
                <span>Home</span>
              </a>
              <a
                href='#'
                className='list-group-item list-group-item-action py-2 ripple'
              >
                <span>Setting</span>
              </a>
            </div>
          </div>
        </nav>

        <nav
          id='main-navbar'
          className='navbar navbar-expand-lg navbar-light bg-white fixed-top'
        >
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-mdb-toggle='collapse'
              data-mdb-target='#sidebarMenu'
              aria-controls='sidebarMenu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fas fa-bars'></i>
            </button>

            <a className='navbar-brand' href='#'>
              <img
                src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp'
                height='25'
                alt='MDB Logo'
                loading='lazy'
              />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default SideNav;
