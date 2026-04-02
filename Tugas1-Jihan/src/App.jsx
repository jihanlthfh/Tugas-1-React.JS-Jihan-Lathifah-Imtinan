import './App.css'

function App() {
  return (
    <>
      <div className="container">

        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <div className="col-md-3">
            <a href="#" className="d-inline-flex align-items-center text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4 fw-bold">Ruang Baca</span>
            </a>
          </div>

          <ul className="nav">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#books" className="nav-link">Book</a></li> {/* diubah */}
            <li><a href="#team" className="nav-link">Team</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div>
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* HERO */}
        <div className="row align-items-center border rounded-3 shadow-lg p-4 mb-5">
          <div className="col-lg-7">
            <h1 className="fw-bold">
              Atomic Habits
            </h1>
            <p className="lead">
              Buku karya James Clear yang membantu kamu membangun kebiasaan baik dan menghilangkan kebiasaan buruk secara konsisten.
            </p>

            <button className="btn btn-primary me-2">Buy Now</button>
            <button className="btn btn-outline-secondary">Detail</button>
          </div>

          <div className="col-lg-5">
            <img
              src="https://picsum.photos/500/400"
              className="img-fluid rounded"
              alt=""
            />
          </div>
        </div>

        {/* BEST SELLER */}
        <section id="books" className="text-center mb-5">
          <h2>Best Seller Books</h2>
          <p className="text-muted">
            Koleksi buku terbaik pilihan pembaca
          </p>
        </section>

        <div className="row g-4">
          {[
            { title: "Atomic Habits", author: "James Clear" },
            { title: "Deep Work", author: "Cal Newport" },
            { title: "The Psychology of Money", author: "Morgan Housel" },
            { title: "Madilog", author: "Tan Malaka" },
            { title: "Catatan Seorang Demonstran", author: "Soe Hok Gie" },
            { title: "Perahu Kertas", author: "Dee Lestari" }
          ].map((book, i) => (
            <div className="col-md-4" key={i}>
              <div className="card shadow-sm h-100">
                <img
                  src={`https://picsum.photos/300/200?random=${i}`}
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <h5>{book.title}</h5>
                  <p className="text-muted">{book.author}</p>
                  <button className="btn btn-sm btn-outline-primary">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TEAM */}
        <section id="team" className="text-center mt-5">
          <h2>Our Team</h2>
          <p className="text-muted">Tim kreatif di balik BookStore</p>

          <div className="row mt-4">
            {["Jihan", "Lathifah", "Imtinan"].map((name, i) => (
              <div className="col-md-4" key={i}>
                <img
                  src={`https://picsum.photos/150?random=${i + 100}`}
                  className="rounded-circle mb-3"
                  alt={name}
                />
                <h5>{name}</h5>
                <p className="text-muted">Web Developer</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-5">
          <div className="text-center mb-4">
            <h2>Contact Us</h2>
            <p className="text-muted">Kami senang mendengar dari kamu!</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="p-4 border rounded shadow-sm bg-white">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Nama" />
                  <label htmlFor="name">Nama</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Pesan" id="message" style={{ height: '120px' }}></textarea>
                  <label htmlFor="message">Pesan</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="b-example-divider"></div>

        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li><a href="#books" className="nav-link px-2 text-body-secondary">Book</a></li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>

          <p className="text-center text-body-secondary">&copy; 2026 NF Academy</p>
        </footer>

      </div>

      {/* Smooth scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}

export default App