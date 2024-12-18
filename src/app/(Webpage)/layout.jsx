import Navbar from "../components/Navbar";

export default function BlogLayout({
    children,
  }) {
    return (<section>
        <Navbar/>
        {children}
        </section>)
  }