import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CarrouselImg from "../components/caroussel"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <CarrouselImg />
  </Layout>
)

export default SecondPage
