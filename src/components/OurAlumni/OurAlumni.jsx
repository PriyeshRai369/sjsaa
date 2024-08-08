import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { products } from "./Data";

export default function OurAlumni() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Alunmi Details</h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <DataTable
              showGridlines
              value={products}
              tableStyle={{
                minWidth: "50rem",
                color: "white",
              }}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
            >
              <Column field="Sr. No." header="Sr. No."></Column>
              <Column field="Name" header="Name"></Column>
              <Column field="Joined Year" header="Joined Year"></Column>
              <Column field="Batch" header="Batch"></Column>
              <Column field="Qualification" header="Qualification"></Column>
              <Column field="Date of Birth" header="Date of Birth"></Column>
              <Column
                field="Profession & Working As"
                header="Profession & Working As"
              ></Column>
              <Column
                field="Current Location"
                header="Current Location"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </section>
  );
}
