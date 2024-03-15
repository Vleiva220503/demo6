import DataTable from "react-data-table-component";
import AmpIcon from "../AmpIcon/AmpIcon";
import AmpNoDataTable from "../AmpNoDataTable/AmpNoDataTable";
import AmpLoadingTable from "../AmpLoadingTable/AmpLoadingTable";

// Define las props y su tipado
export interface AmpTableRefactorProps {
  columns: any[];
  data: any;
  isLoading?: boolean;
  noDataMessage?: string;
  isError?: boolean;
  onRowClicked?: (data: any) => void;
  pagination?: boolean;
  showEmptyIcon?: boolean;
  conditionalRowStyles?: any;
  subHeaderComponent?: JSX.Element;
  subHeader?: boolean;
  className?: string;
}

const AmpTableRefactor = (props: AmpTableRefactorProps) => {
  const {
    columns,
    data,
    isLoading,
    noDataMessage = "No hay datos disponibles", // Valor predeterminado a
    isError,
    onRowClicked,
    showEmptyIcon = true,
    conditionalRowStyles,
    subHeader = false,
    subHeaderComponent,
    className
  } = props;

  const { pagination = true } = props;

  return (
    <DataTable
      className={className ?? "amp-table-refactor"}
      columns={columns}
      data={isError === true && data.length > 0 ? [] : data}
      progressPending={isLoading}
      pagination={pagination}
      persistTableHead
      noDataComponent={
        <AmpNoDataTable message={noDataMessage} showEmptyIcon={showEmptyIcon} />
      }
      sortIcon={<AmpIcon icon='caret-down' onClick={() => {}} />}
      progressComponent={<AmpLoadingTable />} 
      paginationComponentOptions={{
        rowsPerPageText: 'Rows per page', 
        rangeSeparatorText: 'of', 
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All' 
      }}
      onRowClicked={onRowClicked}
      conditionalRowStyles={conditionalRowStyles}
      subHeader={subHeader}
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default AmpTableRefactor;
