import Container from "@/components/layout/Container";
import { openingHours, storeAddress } from "@/lib/data";

export default function HoursLocation() {
  return (
    <section className="bg-(--colour-canvas) py-16 md:py-24">
      <Container>
        <div
          className="bg-white rounded-(--radius-card) p-8 md:p-12 shadow-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Hours */}
            <div>
              <h2 className="text-2xl font-bold text-(--colour-green-starbucks) mb-6">
                Opening Hours
              </h2>
              <table className="w-full text-base">
                <tbody>
                  {openingHours.map((entry) => (
                    <tr
                      key={entry.day}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="py-3 font-medium text-(--colour-green-house) pr-8">
                        {entry.day}
                      </td>
                      <td className="py-3 text-(--color-text-secondary)">
                        {entry.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-2xl font-bold text-(--colour-green-starbucks) mb-6">
                Find Us
              </h2>
              <address className="not-italic text-base text-(--color-text-secondary) leading-relaxed">
                <p className="text-lg font-semibold text-(--colour-green-house)">
                  Green Valley Wholesale Supermarket
                </p>
                <p className="mt-2">{storeAddress.street}</p>
                <p>
                  {storeAddress.suburb} {storeAddress.state} {storeAddress.postcode}
                </p>
                <p className="mt-4">
                  <span className="font-medium text-(--colour-green-house)">Phone:</span>{" "}
                  {storeAddress.phone}
                </p>
                <p>
                  <span className="font-medium text-(--colour-green-house)">Email:</span>{" "}
                  {storeAddress.email}
                </p>
              </address>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
