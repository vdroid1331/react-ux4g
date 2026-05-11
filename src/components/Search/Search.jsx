import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputGroup } from "../InputGroup/InputGroup";
import { FormControl } from "../Form/FormControl";
import { Button } from "../Button/Button";

/**
 * Search component providing a stylized input group with a search icon/button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} [props.onSearch] - Callback fired when the search form is submitted. Receives the query string.
 * @param {string} [props.placeholder='Search...'] - Placeholder text for the input.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Search component.
 */
export const Search = ({
  onSearch,
  placeholder = "Search...",
  className = "",
  ...props
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`ux4g-search ${className}`.trim()}
      {...props}
    >
      <InputGroup>
        <FormControl
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
        <Button type="submit" variant="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Button>
      </InputGroup>
    </form>
  );
};

Search.propTypes = {
  /** Callback fired when the search form is submitted. Receives the current query string as an argument. */
  onSearch: PropTypes.func,
  /** Placeholder text for the input. */
  placeholder: PropTypes.string,
  /** Additional custom CSS classes applied to the wrapping `<form>`. */
  className: PropTypes.string,
};
