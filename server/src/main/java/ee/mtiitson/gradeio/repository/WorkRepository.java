package ee.mtiitson.gradeio.repository;

import ee.mtiitson.gradeio.model.Lab;
import ee.mtiitson.gradeio.model.Work;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface WorkRepository extends PagingAndSortingRepository<Work, Long> { }
