import { Header } from "../../../components";


const Trips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="View and edit AI-generated Travel Plans."
        ctaText="Create New Trip"
        ctaUrl="/trips/create"
      />
      <section>
        <h1 className="p-24-semibold text-dark-100 mb-4">
          Manage Created Trips
        </h1>
      </section>
    </main>)
}

export default Trips
