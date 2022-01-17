export function Paginator({ numberOfRecords }) {
  return (
    <div class="clearfix">
      <div class="hint-text">
        Showing 
        <b>10</b> out of 
        <b>{numberOfRecords}</b> entries
      </div>
      <ul class="pagination">
        <li class="page-item disabled">
          <a href="#">Previous</a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            1
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            2
          </a>
        </li>
        <li class="page-item active">
          <a href="#" class="page-link">
            3
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            4
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            5
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}