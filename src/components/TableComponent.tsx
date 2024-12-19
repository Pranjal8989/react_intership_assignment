/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DataTable, DataTablePageEvent } from "primereact/datatable";
import { OverlayPanel } from "primereact/overlaypanel";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { TableData } from "../types/TableTypes";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface Table {
  data: TableData[];
  rowsPerPage: number;
  totalRecords: number;
  page: number;
  selectedRows: Record<number, boolean>;
  onSelectAllRowChange: (e: any) => void;
  onRowSelectChange: (e: any, id: number) => void;
  onPageChange: (e: DataTablePageEvent) => void;
  overlay_Panel: React.RefObject<OverlayPanel>;
}

const TableComponent: React.FC<Table> = ({
  data,
  rowsPerPage,
  totalRecords,
  page,
  selectedRows,
  onSelectAllRowChange,
  onRowSelectChange,
  onPageChange,
  overlay_Panel,
}) => {
  const isAllSelected =
    data.length > 0 && data.every((data) => selectedRows[data.id]);

  const rowClass = (row: TableData) => {
    return selectedRows[row.id] ? "row-selected" : "";
  };

  return (
    <DataTable
      value={data}
      paginator
      rows={rowsPerPage}
      totalRecords={totalRecords}
      lazy
      onPage={onPageChange}
      first={(page - 1) * rowsPerPage}
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      dataKey="id"
      tableStyle={{ minWidth: "50rem", textAlign: "center" }}
    >
      <Column
        header={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox onChange={onSelectAllRowChange} checked={isAllSelected} />
            <Button
              icon="pi pi-chevron-down"
              onClick={(e) => overlay_Panel.current?.toggle(e)}
              className="p-button-text p-button-info"
              style={{
                marginLeft: "5px",
              }}
            />
          </div>
        }
        body={(rowData) => (
          <Checkbox
            checked={!!selectedRows[rowData.id]}
            onChange={(e) => onRowSelectChange(e, rowData.id)}
          />
        )}
        bodyClassName={rowClass}
        headerStyle={{ width: "8rem" }}
      />
      <Column field="title" header="Title" bodyClassName={rowClass} />
      <Column
        field="place_of_origin"
        header="Place of Origin"
        bodyClassName={rowClass}
      />
      <Column
        field="artist_display"
        header="Artist Display"
        bodyClassName={rowClass}
      />
      <Column
        field="inscriptions"
        header="Inscriptions"
        bodyClassName={rowClass}
      />
      <Column field="date_start" header="Date Start" bodyClassName={rowClass} />
      <Column field="date_end" header="Date End" bodyClassName={rowClass} />
    </DataTable>
  );
};

export default TableComponent;
